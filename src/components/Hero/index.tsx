import type { FC } from "react";
import { PDTP_OVERVIEW } from "../../constants";
import { AnimatedSquares } from "./circle";
import { PDTP } from "./pdtp";

type Props = {
  animate: boolean;
};
export const Hero: FC<Props> = ({ animate }) => {
  return (
    <section className="h-screen flex flex-col justify-center w-full">
      <span className="flex flex-col items-center w-full">
        <h1 className="w-[300px] overflow-hidden h-[200px] ml-12 mt-32 text-6xl font-bold flex relative scale-[200%]">
          <span className="absolute scale-[44%] top-[-8px] left-[-77px] text-white">
            <PDTP animate={animate} />
          </span>
          {animate && (
            <AnimatedSquares
              positions={[
                // P
                {
                  x: 0,
                  y: 0,
                  r: 0,
                  width: 0.1,
                  height: 0.7,
                },
                {
                  x: 0.1,
                  y: 0,
                  r: 0,
                  width: 0.3,
                  height: 0.1,
                },
                {
                  x: 0.4,
                  y: -0.1,
                  r: 0,
                  width: 0.1,
                  height: 0.2,
                },
                {
                  x: 0.1,
                  y: -0.3,
                  r: 0,
                  width: 0.3,
                  height: 0.1,
                },
                // D
                {
                  x: 1,
                  y: 0,
                  r: 0,
                  width: 0.1,
                  height: 0.7,
                },
                {
                  x: 1.1,
                  y: 0,
                  r: 0,
                  width: 0.2,
                  height: 0.1,
                },
                {
                  x: 1.3,
                  y: -0.1,
                  r: 0,
                  width: 0.1,
                  height: 0.1,
                },
                {
                  x: 1.4,
                  y: -0.2,
                  r: 0,
                  width: 0.1,
                  height: 0.3,
                },
                {
                  x: 1.3,
                  y: -0.5,
                  r: 0,
                  width: 0.1,
                  height: 0.1,
                },
                {
                  x: 1.1,
                  y: -0.6,
                  r: 0,
                  width: 0.2,
                  height: 0.1,
                },
                {
                  x: 2,
                  y: 0,
                  r: 0,
                  width: 0.5,
                  height: 0.1,
                },
                {
                  x: 2.2,
                  y: -0.1,
                  r: 0,
                  width: 0.1,
                  height: 0.6,
                },
                // P
                {
                  x: 3,
                  y: 0,
                  r: 0,
                  width: 0.1,
                  height: 0.7,
                },
                {
                  x: 3.1,
                  y: 0,
                  r: 0,
                  width: 0.3,
                  height: 0.1,
                },
                {
                  x: 3.4,
                  y: -0.1,
                  r: 0,
                  width: 0.1,
                  height: 0.2,
                },
                {
                  x: 3.1,
                  y: -0.3,
                  r: 0,
                  width: 0.3,
                  height: 0.1,
                },
              ]}
            />
          )}
        </h1>
        <p className="text-xl max-w-5xl font-bold px-6">{PDTP_OVERVIEW}</p>
      </span>
    </section>
  );
};
