# GitHub Copilot Instructions — SWDevPrac2 A11

## 1. Project context

This repository is part of the SWDevPrac2 course.

- Repository: `swdevprac2-69-1-a11-swdevprac2-69-1-jadsadapeet`
- GitHub organization/remote namespace: `SWDevPrac2-69-1`
- Main branch: `main`
- Remote name: `origin`

The Git configuration identifies the repository, but it does **not** describe the assignment requirements, application architecture, framework, or expected behavior. Do not infer these details from the repository name alone.

## 2. First task: inspect before changing anything

Before implementing a feature or editing files:

1. Inspect the repository's actual project files and directory structure.
2. Read `README.md`, assignment instructions, rubric, tests, and any existing documentation if present.
3. Identify the language, framework, package manager, run commands, test commands, and existing coding conventions from the files themselves.
4. Review the relevant source files and tests before proposing a change.
5. If the assignment instructions or necessary context are missing, tell the user exactly what is missing and ask for it. Do not invent requirements.

Do not treat `.git` internals, sample Git hooks, or Git metadata as application source code.

## 3. General development rules

- Follow the assignment specification and grading rubric when they are available.
- Preserve the existing architecture and naming conventions unless a change is required.
- Prefer the smallest clear change that solves the requested problem.
- Reuse existing dependencies and patterns; do not add a library without a clear reason.
- Do not rewrite unrelated files or remove working functionality.
- Do not fabricate features, data, API responses, test results, or assignment requirements.
- If more than one interpretation is possible, explain the options and ask before making a consequential assumption.
- Explain important decisions in beginner-friendly language when requested.

## 4. Teaching and explanation style

The user is learning software development. When helping with code:

1. Explain what the relevant code currently does.
2. Explain the problem or requirement in plain language.
3. Propose the solution and explain why it works.
4. Show which files need to change and why.
5. After a change, summarize what changed and how to verify it.

Do not merely replace large sections of code without explanation when a teaching-oriented answer is appropriate. Prefer step-by-step guidance and help the user understand the code.

## 5. TypeScript and JavaScript guidance

Apply this section only if the repository actually uses TypeScript or JavaScript.

- Follow the project's existing TypeScript configuration and style.
- Use accurate types; do not silence type errors with `any` or type assertions just to make an error disappear.
- Distinguish values such as `string`, `number`, and `boolean`.
- Handle nullable or optional values deliberately.
- Prefer readable functions with clear inputs and outputs.
- Check existing linting, formatting, build, and test scripts before choosing commands.

Do not assume the project uses TypeScript until the repository files confirm it.

## 6. HTML and CSS guidance

Apply this section only if the repository uses HTML and CSS.

- Use semantic HTML elements where appropriate.
- Keep styling consistent with existing project conventions.
- Check that links, form labels, input types, and required-field behavior are appropriate.
- Avoid adding inline styles if the project already uses separate stylesheets.
- Do not claim that a page has been tested in a browser unless it has actually been tested.

## 7. Git and repository safety

- Never edit files inside `.git` unless the user explicitly asks for Git configuration work.
- Never expose, request, or commit passwords, access tokens, private keys, or other secrets.
- Do not change the remote URL, branch history, or Git authentication settings without explaining the consequences and obtaining permission where appropriate.
- Before recommending commands that overwrite, delete, reset, or force-push work, explain the risk and suggest a safe alternative.
- Do not run destructive Git commands as a routine troubleshooting step.
- The configured Git author name and email are metadata, not proof of GitHub authentication or repository permissions.

## 8. Verification

After making a code change:

1. Identify the appropriate existing test, lint, type-check, or build command from project files.
2. Run checks only when the environment supports them and it is appropriate to do so.
3. Report which checks were actually run and their real results.
4. If checks could not be run, say so and give the user the next command to try.
5. Do not claim that code passes tests without evidence.

## 9. Response format

For a coding task, respond with:

- **Understanding:** what the request appears to require.
- **Files inspected:** the relevant files used to make the decision.
- **Plan or changes:** what will change and why.
- **Verification:** the checks run, or the checks the user should run.
- **Open questions:** any missing assignment requirements or decisions that need the user's input.

Keep the response concise for simple questions and more detailed for unfamiliar concepts or multi-file changes.

## 10. Initial instruction for Copilot

Start by inspecting the repository and reporting:

1. What kind of application this appears to be, based on actual files.
2. The main directories and important files.
3. The language/framework and how the project is run or tested, if discoverable.
4. Any README, assignment brief, rubric, or tests found.
5. What information is still missing before safely implementing the requested assignment.

Do not modify files during this initial inspection unless the user explicitly asks you to begin implementation.
