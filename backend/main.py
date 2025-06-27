from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import Dict, List
import uvicorn

app = FastAPI()
rooms: Dict[str, List[WebSocket]] = {}

@app.websocket("/ws/{room_id}")
async def websocket_endpoint(websocket: WebSocket, room_id: str):
    await websocket.accept()
    rooms.setdefault(room_id, []).append(websocket)
    try:
        while True:
            msg = await websocket.receive_text()
            # reenvía la señal a todos los demás peers del room
            for peer in rooms[room_id]:
                if peer is not websocket:
                    await peer.send_text(msg)
    except WebSocketDisconnect:
        rooms[room_id].remove(websocket)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
