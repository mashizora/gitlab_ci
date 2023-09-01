# gitlab_ci

A utility library for writing GitLab CI pipeline scripts with Deno.

## Features

- Export GitLab CI
  [predefined variables](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html).
- Provide a setup script for installing workspace-level Deno runtime.

## Examples

Run setup script in `.gitlab-ci.yml`:

```yml
job:
  script:
    - irm https://deno.land/x/gitlab_ci/setup.ps1 | iex
    - deno run ./pipeline.ts
```

Import GitLab CI variables in TypeScript code:

```ts
import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { GITLAB_CI } from "https://deno.land/x/gitlab_ci/mod.ts";

assertEquals(GITLAB_CI, true);
```
