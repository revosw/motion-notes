import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Layout, Line, Rect } from '@motion-canvas/2d/lib/components';
import { Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { waitFor } from "@motion-canvas/core/lib/flow"
import { linear } from '@motion-canvas/core/lib/tweening';
import { Key, noteFactory, Staff } from './notation';
import { makeRef } from '@motion-canvas/core/lib/utils';

export const globals = {
    backgroundColor: "#141414",
    staffColor: "#999",
    noteColor: "#999",
    metadataLength: 300
}

export default makeScene2D(function* (view) {
    const key: Key = "Ab"
    const scrollOffset = createSignal(0)

    const treble = noteFactory()
    const bass = noteFactory()

    view.add(
        <>
            <Layout layout offsetX={-0.91} width={9000} height={"100%"} direction={"column"} alignItems={"start"} justifyContent={"center"} gap={100} x={() => scrollOffset()}>
                {/* <Rect layout direction={"column"} justifyContent={"stretch"} gap={100}> */}

                <Staff clef='treble' key='Ab'>
                    <treble.EighthNote note="B0" />
                    <treble.EighthNote note="E1" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="B1" />
                    <treble.BarDivider />
                    <treble.QuarterNote note="B1" />
                    <treble.EighthNote note="A1" />
                    <treble.QuarterNote note="G1" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="B1" />
                    <treble.EighthNote note="C2" />
                    <treble.BarDivider />
                    <treble.EighthNote note="E2" />
                    <treble.EighthNote note="B1" />
                    <treble.QuarterNote note="C2" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="E1" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="B1" />
                    <treble.BarDivider />
                    <treble.QuarterNote note="B1" />
                    <treble.EighthNote note="A1" />
                    <treble.QuarterNote note="G1" />
                    <treble.EighthNote note="B1" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="E2" />
                    <treble.BarDivider />
                    <treble.HalfNote note="C2" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="E1" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="B1" />
                    <treble.QuarterNote note="B1" />
                    <treble.EighthNote note="A1" />
                    <treble.QuarterNote note="G1" />
                    <treble.EighthNote note="A1" />
                    <treble.EighthNote note="B1" />
                    <treble.EighthNote note="C2" />
                    <treble.EighthNote note="E2" />
                    <treble.EighthNote note="B1" />
                    <treble.QuarterNote note="C2" />
                    <treble.QuarterNote note="A1" />
                    <treble.QuarterNote note="G1" />
                    <treble.HalfNote note="F1" />
                    <treble.QuarterNote note="G1" />
                    <treble.EighthNote note="A1" />
                    <treble.QuarterNote note="G1" />
                    <treble.HalfNote note="A1" />
                </Staff>
                <Staff clef="bass" key='Ab'>
                    {/* TODO: Make notes appear on correct lines of the staff in bass clef instead of faking it */}
                    <bass.HalfNote note='silence' />
                    <bass.BarDivider />
                    <bass.HalfNote note='B1' />
                    <bass.HalfNote note='D2' />
                    <bass.HalfNote note='C2' />
                    <bass.HalfNote note='F1' />
                    <bass.HalfNote note='B1' />
                    <bass.HalfNote note='D2' />
                    <bass.HalfNote note='C2' />
                    <bass.QuarterNote note='A2' />
                    <bass.QuarterNote note='G2' />
                    <bass.HalfNote note='B1' />
                    <bass.HalfNote note='D2' />
                    <bass.HalfNote note='C2' />
                    <bass.HalfNote note='F1' />
                    <bass.HalfNote note='D2' />
                    <bass.HalfNote note='E2' />
                    <bass.HalfNote note='F2' />
                </Staff>
                {/* </Rect> */}
            </Layout>
            {/* PLAYHEAD */}
            <Rect x={0} y={0} width={12} height={550} fill={"#0af"} radius={6} opacity={0.6} />
        </>
    );

    yield* waitFor(1)
    yield* scrollOffset(-6800, 27.3, linear)
});