import {createSlice} from "@reduxjs/toolkit";

const codes = [100, 101, 102, 103,
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
    411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423,
    424, 425, 426, 428, 429, 431, 451,
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

const generateCode = (): number => {
    return codes[Math.floor(Math.random() * codes.length)];
}

const initialState = {
    code: generateCode(),
    attempts: 3,
    feedback: ' ',
    status: 'playing',
}

const httpCatSlice = createSlice({
    name: 'httpGame',
    initialState,
    reducers: {
        resetGame: (state) => {
            state.code = generateCode();
            state.attempts = 3;
            state.status = 'playing';
        },
        guess: (state, action) => {
            const guess: number = parseInt(action.payload);
            if (state.status !== 'playing') {
                return;
            }

            if (guess === state.code) {
                state.feedback = 'Correct';
                state.status = 'correct';
            } else {
                state.attempts--;
                if (state.attempts === 0) {
                    state.feedback = 'Not correct';
                    state.status = 'failed';
                } else {
                    state.feedback = 'Try Again';
                }
            }
        }
    }
})

export const { resetGame, guess } = httpCatSlice.actions;
export default httpCatSlice.reducer;