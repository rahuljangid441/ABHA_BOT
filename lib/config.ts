import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Get Started",
    prompt: "Hello! How can I help you today?",
    icon: "sparkle",
  },
  {
    label: "Ask a Question",
    prompt: "I have a question",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Type your message...";

export const GREETING = "Hello! 👋 How can I assist you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 140,
      tint: 3,
      shade: -2,
    },
    accent: {
      primary: "#22c55e",
      level: 2,
    },
  },
  radius: "round",
  // Pleasant theme with green accents and grey tones
  // chatkit.studio/playground to explore config options
});
