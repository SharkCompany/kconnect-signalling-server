import { AgoraPayloadResponse, AgoraToken } from "../../model/AgoraModel";
import { RoomModel } from "../../model/RoomModel";

export interface CreateRoomResponse {
  agora: AgoraPayloadResponse;
  room: RoomModel;
}
