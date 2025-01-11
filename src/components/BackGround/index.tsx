import clsx from "clsx";
import { Z_INDEX } from "../../constants";

export const BackGround = () => {
	return (
		<div
			className={clsx(
				"fixed top-0 left-0 w-full h-full opacity-30",
				Z_INDEX.BACKGROUND,
			)}
			style={{
				background:
					" radial-gradient(circle at 40% 50%, #cd0000c1 0%, #000 40%),url(/noise.svg)",
			}}
		/>
	);
};
