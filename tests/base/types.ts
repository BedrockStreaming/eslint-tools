export type TabName = 'infos' | 'console' | 'requests';

export interface Tab {
  name: TabName;
  label: string;
}

export interface RequestHeader {
  name: string;
  value: string;
}

export interface RequestPayload {
  id: string;
  url: string;
  method: string;
  status: number | null;
  statusText: string;
  headers: Record<string, string>;
  data: any;
  responseBody: string;
  responseHeaders: Record<string, string>;
}

export interface RequestState
  extends Pick<
      URL,
      | 'hash'
      | 'host'
      | 'hostname'
      | 'href'
      | 'origin'
      | 'password'
      | 'pathname'
      | 'port'
      | 'protocol'
      | 'search'
      | 'username'
    >,
    Omit<RequestPayload, 'url' | 'headers' | 'responseHeaders'> {
  headers: Record<string, RequestHeader>;
  responseHeaders: Record<string, RequestHeader>;
}
export interface ConsolePayload {
  messages: string[];
  level: 'log' | 'info' | 'warn' | 'error' | 'debug';
}

export type ConsoleState = ConsolePayload;

export interface Message {
  action: 'trace';
  data:
    | {
        type: 'request';
        data: RequestPayload;
      }
    | {
        type: 'console';
        data: ConsolePayload;
      };
}
