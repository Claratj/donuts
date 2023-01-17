export default function DonutsFailedPage(props: { serverError: string }) {
	return <div>{props.serverError}</div>;
}
