import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Line, Rect } from '@motion-canvas/2d/lib/components';
import { Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { waitFor } from "@motion-canvas/core/lib/flow"
import { linear } from '@motion-canvas/core/lib/tweening';

const globals = {
    backgroundColor: "#141414",
    staffColor: "#999",
    noteColor: "#999"
}

export default makeScene2D(function* (view) {
    const key: Key = "Ab"
    const staffMetadataWidth = 200
    const offset = createSignal(1920 / 2 - staffMetadataWidth)

    const {
        WholeNote,
        HalfNote,
        QuarterNote,
        EighthNote,
        SixteenthNote,
        BarDivider
    } = noteFactory()

    view.add(
        <>
            <Rect width={"100%"} height={"100%"} layout direction={"column"} justifyContent={"center"} alignItems={"start"} gap={100} x={() => offset()}>
                <Rect fill={globals.staffColor} padding={2} paddingLeft={4} radius={4}>
                    <Rect height={100} width={"100%"} layout direction={"column"} gap={2}>
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                    </Rect>
                    {/* THIN VERTICAL */}
                    <Line
                        fill={globals.backgroundColor}
                        stroke={globals.backgroundColor}
                        width={5}
                        points={[[0, 0], [100, 50]]}
                    />

                </Rect>
                <Rect fill={globals.staffColor} padding={2} paddingLeft={4} radius={4}>
                    <Rect height={100} width={"100%"} layout direction={"column"} gap={2}>
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                        <Rect height={"25%"} fill={globals.backgroundColor} />
                    </Rect>
                    {/* THIN VERTICAL */}
                    <Line
                        fill={globals.backgroundColor}
                        stroke={globals.backgroundColor}
                        width={5}
                        points={[[0, 0], [100, 200]]}
                    />
                </Rect>
            </Rect>
            {/* PLAYHEAD */}
            <Rect x={0} y={0} width={12} height={550} fill={"#0af"} radius={6} opacity={0.6} />
        </>
    );

    yield* waitFor(2)
    yield* offset(-6800, 20, linear)
});

function noteFactory() {
    let offset = 0

    return {
        WholeNote({ key }: NoteProps) {
            const wholeNote = (
                <Rect>
                    <Circle
                        fill={globals.noteColor}
                        x={offset}
                        width={30}
                        height={20}
                        rotation={-20}
                    />
                    <Circle
                        fill={globals.backgroundColor}
                    />
                    <Rect />
                </Rect>
            )

            offset += 20
            return wholeNote
        },
        HalfNote({ key }: NoteProps) {
            const halfNote = (
                <Rect>
                    <Circle
                        fill={globals.noteColor}
                        x={offset}
                        width={30}
                        height={20}
                        rotation={-20}
                    />
                    <Circle
                        fill={globals.backgroundColor}

                    />
                    <Rect />
                </Rect>
            )

            offset += 20
            return halfNote
        },
        QuarterNote({ key }: NoteProps) {
            const quarterNote = (
                <></>
            )
            offset += 20
            return quarterNote
        },
        EighthNote({ key }: NoteProps) {
            const eighthNote = (
                <></>
            )
            offset += 20
            return eighthNote
        },
        SixteenthNote({ key }: NoteProps) {
            const sixteenthNote = (
                <></>
            )
            offset += 20
            return sixteenthNote
        },
        BarDivider() {
            const barDivider = (
                <Rect
                    x={offset}
                />
            )
            offset += 20
            return barDivider
        }
    }
}

const keys = [
    "C", "D", "E", "F", "G", "A", "B",
    "Db", "Eb", "Gb", "Ab", "Bb",
    "C#", "D#", "F#", "G#", "A#"
] as const
type Key = typeof keys[number]

interface NoteProps {
    key: Key
}

function Staff({ clef, key, children }: StaffProps) {
    return (
        <Rect fill={globals.staffColor} padding={2} paddingLeft={4} radius={4}>
            <Rect height={100} width={"100%"} layout direction={"column"} gap={2}>
                <Rect height={"25%"} fill={globals.backgroundColor} />
                <Rect height={"25%"} fill={globals.backgroundColor} />
                <Rect height={"25%"} fill={globals.backgroundColor} />
                <Rect height={"25%"} fill={globals.backgroundColor} />
            </Rect>
            {/* THIN VERTICAL */}
            <Line
                fill={globals.backgroundColor}
                stroke={globals.backgroundColor}
                width={5}
                points={[[0, 0], [500, 50]]}
            />

        </Rect>
    )
}

interface StaffProps {
    clef: "treble" | "bass"
    key: Key
    children: any
}