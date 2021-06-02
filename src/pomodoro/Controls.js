import React, { useState } from "react";
import DurationControls from "./DurationControls";
import TimerControls from "./TimerControls";

function Controls({ session, isTimerRunning, focusDuration, breakDuration, playPause, stopTimer, incrementFocus, decrementFocus, incrementBreak, decrementBreak, classNames }) {

    return (
        <>
            <DurationControls session={session}
                focusDuration={focusDuration}
                breakDuration={breakDuration}
                incrementFocus={incrementFocus}
                decrementFocus={decrementFocus}
                incrementBreak={incrementBreak}
                decrementBreak={decrementBreak}
            />
            <TimerControls session={session}
                isTimerRunning={isTimerRunning}
                playPause={playPause}
                stopTimer={stopTimer}
                classNames={classNames}
            />
        </>
    );
}

export default Controls;
