import { OnJoinRoomDTO } from "../dto/onMessage/onJoinRoom";
import { MemberModel } from "../model/MemberModel";
import { EmitMessageType, OnNewMessageType } from "../model/MessageModel";
import { RequestJoinRoom, RoomModel } from "../model/RoomModel";
import { UserModel } from "../model/UserModel";

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  newMessageToGroup: (d: EmitMessageType) => void;
  newMemberJoinRoom: (member: MemberModel, room: RoomModel) => void;
  memberLeaveRoom: (member: MemberModel, room: RoomModel) => void;
  joinRoom: (room: RoomModel) => void;
}

export interface ClientToServerEvents {
  hello: (s: string) => void;
  message: (d: OnNewMessageType) => void;
  joinRoom: (onJoinRoom: OnJoinRoomDTO) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
