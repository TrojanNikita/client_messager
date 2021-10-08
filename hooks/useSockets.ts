
   
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const socket = io('ws://127.0.0.1:9003/ws');

export default function useSocket(
    cb?: (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => void
) {
	const [activeSocket, setActiveSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);

	useEffect(() => {
		// debug("Socket updated", { socket, activeSocket });
		if (activeSocket || !socket) return;

		cb?.(socket);

		setActiveSocket(socket);

		return () => {
			// debug("Running useSocket cleanup", { socket });
			socket.off("message.chat1", cb);
		};
	}, [socket]);

	return activeSocket;
}
