const oneSecInMs = 1000;
const oneMinuteInMs = 60 * oneSecInMs;

type ITime =
    | 'oneMinuteInMs'
    | 'oneSecInMs'
    | 'twoSecInMs'
    | 'fiveSecsInMs'
    | 'tenSecsInMs'
    | 'twentySecsInMs'
    | 'fortySecsInMs'
    | 'twoMinutesInMs'
    | 'threeMinutesInMs'
    | 'eightMinutesInMs'
    | 'fiveMinutesInMs';

export const TIME: Record<ITime, number> = {
    oneMinuteInMs,
    oneSecInMs,
    twoSecInMs: 2 * oneSecInMs,

    fiveSecsInMs: 5 * oneSecInMs,
    tenSecsInMs: 10 * oneSecInMs,
    twentySecsInMs: 20 * oneSecInMs,
    fortySecsInMs: 40 * oneSecInMs,
    eightMinutesInMs: 8 * oneMinuteInMs,
    twoMinutesInMs: 2 * oneMinuteInMs,
    threeMinutesInMs: 3 * oneMinuteInMs,
    fiveMinutesInMs: 5 * oneMinuteInMs,
};
