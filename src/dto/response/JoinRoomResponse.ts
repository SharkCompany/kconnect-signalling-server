import { AgoraPayloadResponse, AgoraToken } from "../../model/AgoraModel";
import { RoomModel } from "../../model/RoomModel";

export interface JoinRoomResponse {
  agora: AgoraPayloadResponse;
  room: RoomModel;
}

