export interface MessageModel {
  content: string;
  username: string;
}

export type OnNewMessageType = MessageModel;

export type EmitMessageType = MessageModel & { socketId: string };
