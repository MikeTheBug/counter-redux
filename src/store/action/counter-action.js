import { createAction } from "@reduxjs/toolkit";

export const counterIncrementation = createAction("counter/incrementation");
export const counterDecrementation = createAction("counter/decrementation");
export const counterReset = createAction("counter/reset");