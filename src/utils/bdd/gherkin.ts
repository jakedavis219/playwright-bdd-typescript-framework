import {annotate} from "./annotations";

export function Given(annotation: string): string {
  return annotate("Given", annotation);
}

export function When(annotation: string): string {
  return annotate("When", annotation);
}

export function Then(annotation: string): string {
  return annotate("Then", annotation);
}

export function And(annotation: string): string {
  return annotate("And", annotation);
}
