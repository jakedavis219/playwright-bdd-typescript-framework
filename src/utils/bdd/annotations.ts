import { test } from "@playwright/test";
import {TestStep} from "../../types/shared-types";

export function annotate(step: TestStep, annotation: string): string {
    test.info().annotations.push({
        type: `${step} ${annotation}`,
    });

    return `${step} ${annotation}`;
}
