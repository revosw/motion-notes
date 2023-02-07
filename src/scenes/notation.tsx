import { Circle, Rect, Text } from '@motion-canvas/2d/lib/components';
import { useLogger } from '@motion-canvas/core/lib/utils';
import { globals } from './example';

export function noteFactory() {
    let offset = -7600
    const scaling = 3

    return {
        WholeNote({ note }: { note: Note }) {
            // y={0} is same as B1
            const yOffset = note == "silence"
            ? 0
            : -notes.indexOf(note) + 27
            const wholeNote = (
                <Rect>
                    <Circle
                        layout={false}
                        fill={globals.noteColor}
                        x={offset - 1920 / 2}
                        width={26}
                        height={20}
                        rotation={-4}
                    />
                    <Rect
                        layout={false}
                        radius={4}
                        fill={globals.backgroundColor}

                        width={10}
                        x={offset - 1920 / 2}
                        y={yOffset * 12.5 + 12.5}
                        height={17}
                        clip={true}
                        rotation={-20}
                    />
                    <Rect />
                </Rect>
            )

            offset += 200 * scaling
            return wholeNote
        },
        HalfNote({ note }: { note: Note }) {
            // y={0} is same as B1
            const yOffset = note == "silence"
            ? -0.4
            : -notes.indexOf(note) + 27

            if (note == "silence") {
                const silence = (
                    <Rect
                        layout={false}
                        fill={globals.noteColor}
                        width={30}
                        height={10}
                        x={offset - 1920 / 2 + 4400}
                        y={yOffset * 12.5}
                    />
                )
                useLogger().debug(silence.absolutePosition().x.toString())
                useLogger().debug(silence.absolutePosition().y.toString())
                offset += 100 * scaling
                return silence
            } else {
                const halfNote = (
                    <Rect>
                        <Circle
                            layout={false}
                            fill={globals.noteColor}
                            x={offset - 1920 / 2}
                            y={yOffset * 12.5}
                            width={35}
                            height={24}
                            rotation={-20}
                        />
                        <Rect
                            layout={false}
                            radius={9}
                            fill={globals.backgroundColor}
    
                            width={10}
                            x={offset - 1920 / 2}
                            y={yOffset * 12.5}
                            height={22}
                            clip={true}
                            rotation={50}
                        />
                        <Rect
                            layout={false}
                            fill={globals.noteColor}
                            x={offset - 1920 / 2 + 16}
                            y={yOffset * 12.5 - 37.5}
                            height={75}
                            width={2}
    
                        />
                    </Rect>
                )
    
                offset += 100 * scaling
                return halfNote
            }
            
        },
        QuarterNote({ note }: { note: Note }) {
            // y={0} is same as B1
            const yOffset = note == "silence"
            ? 0
            : -notes.indexOf(note) + 27
            const quarterNote = (
                <Rect>
                    <Circle
                        layout={false}
                        fill={globals.noteColor}
                        x={offset - 1920 / 2}
                        y={yOffset * 12.5}
                        width={35}
                        height={24}
                        rotation={-20}
                    />
                    <Rect
                        layout={false}
                        fill={globals.noteColor}
                        x={offset - 1920 / 2 + 16}
                        y={yOffset * 12.5 - 37.5}
                        height={75}
                        width={2}

                    />
                </Rect>
            )

            offset += 50 * scaling
            return quarterNote
        },
        EighthNote({ note }: { note: Note }) {
            // y={0} is same as B1
            const yOffset = note == "silence"
            ? 0
            : -notes.indexOf(note) + 27
            const eighthNote = (
                <Rect>
                    <Circle
                        layout={false}
                        fill={globals.noteColor}
                        x={offset - 1920 / 2}
                        y={yOffset * 12.5}
                        width={35}
                        height={24}
                        rotation={-20}
                    />
                    <Rect
                        layout={false}
                        fill={globals.noteColor}
                        x={offset - 1920 / 2 + 16}
                        y={yOffset * 12.5 - 37.5}
                        height={75}
                        width={2}
                    />
                    <Rect
                        layout={false}
                        fill={globals.noteColor}
                        x={offset - 1920 / 2 + 22}
                        y={yOffset * 12.5 - 75}
                        height={8}
                        width={15}
                    />
                </Rect>
            )
            offset += 25 * scaling
            return eighthNote
        },
        SixteenthNote({ note }: { note: Note }) {
            const sixteenthNote = (
                <></>
            )
            offset += 12.5 * scaling
            return sixteenthNote
        },
        BarDivider() {
            const barDivider = (
                <Rect
                    fill={globals.staffColor}
                    layout={false}

                    x={offset - 1920 / 2 + 4460}
                    y={0}
                    width={2}
                    height={100}
                />
            )
            // offset += 2 * scaling
            return barDivider
        }
    }
}

export const keys = [
    "C", "D", "E", "F", "G", "A", "B",
    "Db", "Eb", "Gb", "Ab", "Bb",
    "C#", "D#", "F#", "G#", "A#"
] as const
export const notes = [
    "C-2", "D-2", "E-2", "F-2", "G-2", "A-2", "B-2",
    "C-1", "D-1", "E-1", "F-1", "G-1", "A-1", "B-1",
    "C0", "D0", "E0", "F0", "G0", "A0", "B0",
    "C1", "D1", "E1", "F1", "G1", "A1", "B1",
    "C2", "D2", "E2", "F2", "G2", "A2", "B2",
    "C3", "D3", "E3", "F3", "G3", "A3", "B3",
    "C4", "D4", "E4", "F4", "G4", "A4", "B4",
    "silence"
] as const
export type Key = typeof keys[number]
export type Note = typeof notes[number]

export function Staff({ clef, key, children }: StaffProps) {
    const flatSharpOffset = -3900
    return (
        <Rect offsetX={-1} width={"100%"} fill={globals.staffColor} padding={2} paddingLeft={8} radius={4}>
            <Rect offsetX={-1} height={100} width={"100%"} layout direction={"column"} gap={2}>
                <Rect height={"25%"} width={"100%"} fill={globals.backgroundColor} />
                <Rect height={"25%"} width={"100%"} fill={globals.backgroundColor} />
                <Rect height={"25%"} width={"100%"} fill={globals.backgroundColor} />
                <Rect height={"25%"} width={"100%"} fill={globals.backgroundColor} />
            </Rect>

            {clef == "bass" ?
                <Text
                    layout={false}
                    offsetX={0}
                    y={16}
                    x={-4440}
                    fontSize={130}
                    fill={globals.noteColor}
                >𝄢</Text>
                :
                <Text
                    layout={false}
                    offsetX={0}
                    y={0}
                    x={-4450}
                    fontSize={150}
                    fill={globals.noteColor}
                >𝄞</Text>
            }

            {/* TODO: make key signature component */}
            <Text
                layout={false}
                y={-3}
                x={-480 + flatSharpOffset}
                fontSize={70}
                fill={globals.noteColor}
            >♭</Text>
            <Text
                layout={false}
                y={-41}
                x={-455 + flatSharpOffset}
                fontSize={70}
                fill={globals.noteColor}
            >♭</Text>
            <Text
                layout={false}
                y={10}
                x={-430 + flatSharpOffset}
                fontSize={70}
                fill={globals.noteColor}
            >♭</Text>
            <Text
                layout={false}
                y={-15}
                x={-405 + flatSharpOffset}
                fontSize={70}
                fill={globals.noteColor}
            >♭</Text>
            {children}

        </Rect>
    )
}

interface StaffProps {
    clef: "treble" | "bass"
    key: Key
    children: any
}