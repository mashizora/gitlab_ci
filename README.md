# gitlab_ci

A utility library for writing GitLab CI pipeline scripts in [TypeScript](https://www.typescriptlang.org) with [Deno](https://deno.com).

## Features

- Export GitLab CI [predefined variables](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html).
- Setup script for installing workspace-level Deno runtime.

## Examples

Add setup script into `.gitlab-ci.yml`:

```yml
job:
  script:
    - irm https://deno.land/x/gitlab_ci/setup.ps1 | iex
    - deno run ./pipeline.ts
```

Import GitLab CI variables in TypeScript code:

```ts
import { assertEquals } from 'https://deno.land/std/assert/mod.ts';
import { GITLAB_CI } from 'https://deno.land/x/gitlab_ci/mod.ts';

assertEquals(GITLAB_CI, true);
```
