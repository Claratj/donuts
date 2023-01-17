import AppLoader from 'components/AppLoader/AppLoader';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import React from 'react';
import { QueryStatus } from 'react-query';
import IRequestStatus from 'types/IRequestStatus';

interface HookReturnedData<HookReturnedProps> {
	status: IRequestStatus | QueryStatus;
	props: HookReturnedProps;
}

type UseHookArgs<Props, ParamsLength> = ParamsLength extends 0 ? undefined : Props;

type WithQueryProps<P, HRP> = IWithQueryPropsHook<P, HRP> | IWithQueryPropsQuery<P, HRP>;

interface IWithQueryPropsHook<Props, HookReturnedProps> {
	Component: React.ComponentType<HookReturnedProps>;
	Error?: React.ComponentType<HookReturnedProps>;
	Loader?: React.ComponentType<HookReturnedProps>;
	useHook: <ParamsLength extends number>(args: UseHookArgs<Props, ParamsLength>) => HookReturnedData<HookReturnedProps>;
	/**
	 * Set this flag to true when the component is in charge of handling the server errors.
	 */
	shouldHandleErrorsOnSuccess?: boolean;
	/**
	 * Set this flag to true when the component is in charge of rendering the view before a request is made to the server.
	 */
	shouldHandleIdleOnSuccess?: boolean;
}

interface IWithQueryPropsQuery<Props, HookReturnedProps> {
	Component: React.ComponentType<HookReturnedProps>;
	Error?: React.ComponentType<HookReturnedProps>;
	Loader?: React.ComponentType<HookReturnedProps>;
	useHook: <ParamsLength extends number>(args: UseHookArgs<Props, ParamsLength>) => HookReturnedData<HookReturnedProps>;
	/**
	 * Set this flag to true when the component is in charge of handling the server errors.
	 */
	shouldHandleErrorsOnSuccess?: boolean;
	/**
	 * Set this flag to true when the component is in charge of rendering the view before a request is made to the server.
	 */
	shouldHandleIdleOnSuccess?: boolean;
}

/**
 * High order component that returns a spinner when the hook provided is on a pending status.
 */
export default function WithQuery<Props, HookReturnedProps>({
	useHook,
	Component,
	Loader = AppLoader,
	Error = ErrorComponent,
	shouldHandleErrorsOnSuccess = false,
	shouldHandleIdleOnSuccess = false,
}: WithQueryProps<Props, HookReturnedProps>) {
	function WrappedComponent(originalProps: Props) {
		const { status, props } = useHook(originalProps);

		if (status === 'PENDING' || status === 'loading') {
			return <Loader {...(props as any)} />;
		}

		if (
			status === 'SUCCESS' ||
			(shouldHandleErrorsOnSuccess && status === 'FAILED') ||
			(shouldHandleIdleOnSuccess && status === 'IDLE') ||
			status === 'success' ||
			(shouldHandleErrorsOnSuccess && status === 'error') ||
			(shouldHandleIdleOnSuccess && status === 'idle')
		) {
			return <Component {...(props as any)} />;
		}

		if (status === 'FAILED' || status === 'error') {
			return <Error {...(props as any)} />;
		}

		// TODO: Handle idle status?

		return null;
	}

	WrappedComponent.displayName = `WithQuery_${Component.displayName || Component.name}`;

	return WrappedComponent;
}
