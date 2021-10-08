import { ReactNode, useState } from "react";

export enum RequestProgressStatus {
    Initial = 'Initial',
    Fetching = 'Fetching',
    Rejected = 'Rejected',
    Successful = 'Successful',
}

type RemoteInitial = {type: RequestProgressStatus.Initial};
type RemoteFetching = {type: RequestProgressStatus.Fetching};
type RemoteRejected<E> = {type: RequestProgressStatus.Rejected, error?: E};
type RemoteSuccess<T> = {type: RequestProgressStatus.Successful, data: T};

export type RemoteData<T extends {}, E extends Error = Error> =
	RemoteInitial
	| RemoteFetching
	| RemoteSuccess<T>
	| RemoteRejected<E>;

interface IRemoteAction<T, E> {
	onSuccess: (data: T) => ReactNode;
	onRejected?: (error?: E) => ReactNode;
	onFetching?: () => ReactNode;
	onInit?: () => ReactNode;
}

export function useRemote<T, E extends Error = Error>() {
	const [remote, setRemote] = useState<RemoteData<T, E>>({type: RequestProgressStatus.Initial});

	const setInitial = () => setRemote({type: RequestProgressStatus.Initial});
	const setFetching = () => setRemote({type: RequestProgressStatus.Fetching});
	const setRejected = (error?: E) => setRemote({type: RequestProgressStatus.Rejected, error});
	const setSuccess = (data: T) => setRemote({type: RequestProgressStatus.Successful, data});

	return {remote, setInitial, setFetching, setRejected, setSuccess} as const;
}

export function fold<T, E extends Error = Error>(remote: RemoteData<T, E>) {
	return (
        onInit: () => ReactNode,
        onRejected: (error?: E) => ReactNode,
        onFetching: () => ReactNode,
        onSuccess: (data: T) => ReactNode,
    ) => {
		switch (remote.type) {
			case RequestProgressStatus.Initial:	return onInit();
			case RequestProgressStatus.Rejected: return onRejected(remote.error);
			case RequestProgressStatus.Fetching: return onFetching();
			default: return onSuccess(remote.data);
		}
	};
}