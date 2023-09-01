const ENV = Deno.env.toObject();

/** `true` for all jobs executed in CI/CD. */
export const CI = ENV.CI === "true";

/** The GitLab API v4 root URL. */
export const CI_API_V4_URL = ENV.CI_API_V4_URL;

/** The GitLab API GraphQL root URL. */
export const CI_API_GRAPHQL_URL = ENV.CI_API_GRAPHQL_URL;

/** The top-level directory where builds are executed. */
export const CI_BUILDS_DIR = ENV.CI_BUILDS_DIR;

/** The author of the commit in `name <email>` format. */
export const CI_COMMIT_AUTHOR = ENV.CI_COMMIT_AUTHOR;

/** The previous latest commit present on a branch or tag. Is always `0000000000000000000000000000000000000000` in merge request pipelines and for the first commit in pipelines for branches or tags. */
export const CI_COMMIT_BEFORE_SHA = ENV.CI_COMMIT_BEFORE_SHA;

/** The commit branch name. Available in branch pipelines, including pipelines for the default branch. Not available in merge request pipelines or tag pipelines. */
export const CI_COMMIT_BRANCH = ENV.CI_COMMIT_BRANCH;

/** The description of the commit. If the title is shorter than 100 characters, the message without the first line. */
export const CI_COMMIT_DESCRIPTION = ENV.CI_COMMIT_DESCRIPTION;

/** The full commit message. */
export const CI_COMMIT_MESSAGE = ENV.CI_COMMIT_MESSAGE;

/** The branch or tag name for which project is built. */
export const CI_COMMIT_REF_NAME = ENV.CI_COMMIT_REF_NAME;

/** `true` if the job is running for a protected reference, `false` otherwise. */
export const CI_COMMIT_REF_PROTECTED = ENV.CI_COMMIT_REF_PROTECTED === "true";

/** `CI_COMMIT_REF_NAME` in lowercase, shortened to 63 bytes, and with everything except `0-9` and `a-z` replaced with `-`. No leading / trailing `-`. Use in URLs, host names and domain names. */
export const CI_COMMIT_REF_SLUG = ENV.CI_COMMIT_REF_SLUG;

/** The commit revision the project is built for. */
export const CI_COMMIT_SHA = ENV.CI_COMMIT_SHA;

/** The first eight characters of `CI_COMMIT_SHA`. */
export const CI_COMMIT_SHORT_SHA = ENV.CI_COMMIT_SHORT_SHA;

/** The commit tag name. Available only in pipelines for tags. */
export const CI_COMMIT_TAG = ENV.CI_COMMIT_TAG;

/** The commit tag message. Available only in pipelines for tags. */
export const CI_COMMIT_TAG_MESSAGE = ENV.CI_COMMIT_TAG_MESSAGE;

/** The timestamp of the commit. */
export const CI_COMMIT_TIMESTAMP = new Date(ENV.CI_COMMIT_TIMESTAMP);

/** The title of the commit. The full first line of the message. */
export const CI_COMMIT_TITLE = ENV.CI_COMMIT_TITLE;

/** The unique ID of build execution in a single executor. */
export const CI_CONCURRENT_ID = ENV.CI_CONCURRENT_ID;

/** The unique ID of build execution in a single executor and project. */
export const CI_CONCURRENT_PROJECT_ID = ENV.CI_CONCURRENT_PROJECT_ID;

/** The path to the CI/CD configuration file. Defaults to `.gitlab-ci.yml`. Read-only inside a running pipeline. */
export const CI_CONFIG_PATH = ENV.CI_CONFIG_PATH;

/** `true` if [debug logging (tracing)](https://docs.gitlab.com/ee/ci/variables/index.html#enable-debug-logging) is enabled. */
export const CI_DEBUG_TRACE = ENV.CI_DEBUG_TRACE === "true";

/** `true` if [service container logging](https://docs.gitlab.com/ee/ci/services/index.html#capturing-service-container-logs) is enabled. */
export const CI_DEBUG_SERVICES = ENV.CI_DEBUG_SERVICES === "true";

/** The name of the project’s default branch. */
export const CI_DEFAULT_BRANCH = ENV.CI_DEFAULT_BRANCH;

/** The top-level group image prefix for pulling images through the Dependency Proxy. */
export const CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX = ENV.CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX;

/** The direct group image prefix for pulling images through the Dependency Proxy. */
export const CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX = ENV.CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX;

/** The password to pull images through the Dependency Proxy. */
export const CI_DEPENDENCY_PROXY_PASSWORD = ENV.CI_DEPENDENCY_PROXY_PASSWORD;

/** The server for logging in to the Dependency Proxy. This is equivalent to `$CI_SERVER_HOST:$CI_SERVER_PORT`. */
export const CI_DEPENDENCY_PROXY_SERVER = ENV.CI_DEPENDENCY_PROXY_SERVER;

/** The username to pull images through the Dependency Proxy. */
export const CI_DEPENDENCY_PROXY_USER = ENV.CI_DEPENDENCY_PROXY_USER;

/** `true` if the pipeline runs during a [deploy freeze window](https://docs.gitlab.com/ee/user/project/releases/index.html#prevent-unintentional-releases-by-setting-a-deploy-freeze). */
export const CI_DEPLOY_FREEZE = ENV.CI_DEPLOY_FREEZE === "true";

/** The authentication password of the [GitLab Deploy Token](https://docs.gitlab.com/ee/user/project/deploy_tokens/index.html#gitlab-deploy-token), if the project has one. */
export const CI_DEPLOY_PASSWORD = ENV.CI_DEPLOY_PASSWORD;

/** The authentication username of the [GitLab Deploy Token](https://docs.gitlab.com/ee/user/project/deploy_tokens/index.html#gitlab-deploy-token), if the project has one. */
export const CI_DEPLOY_USER = ENV.CI_DEPLOY_USER;

/** Only available if the job is executed in a disposable environment (something that is created only for this job and disposed of/destroyed after the execution - all executors except `shell` and `ssh`). `true` when available. */
export const CI_DISPOSABLE_ENVIRONMENT = ENV.CI_DISPOSABLE_ENVIRONMENT;

/** The name of the environment for this job. Available if [`environment:name`](https://docs.gitlab.com/ee/ci/yaml/index.html#environmentname) is set. */
export const CI_ENVIRONMENT_NAME = ENV.CI_ENVIRONMENT_NAME;

/** The simplified version of the environment name, suitable for inclusion in DNS, URLs, Kubernetes labels, and so on. Available if [`environment:name`](https://docs.gitlab.com/ee/ci/yaml/index.html#environmentname) is set. The slug is [truncated to 24 characters](https://gitlab.com/gitlab-org/gitlab/-/issues/20941). A random suffix is automatically added to [uppercase environment names](https://gitlab.com/gitlab-org/gitlab/-/issues/415526). */
export const CI_ENVIRONMENT_SLUG = ENV.CI_ENVIRONMENT_SLUG;

/** The URL of the environment for this job. Available if [`environment:url`](https://docs.gitlab.com/ee/ci/yaml/index.html#environmenturl) is set. */
export const CI_ENVIRONMENT_URL = ENV.CI_ENVIRONMENT_URL;

/** The action annotation specified for this job’s environment. Available if [`environment:action`](https://docs.gitlab.com/ee/ci/yaml/index.html#environmentaction) is set. */
export const CI_ENVIRONMENT_ACTION = ENV.CI_ENVIRONMENT_ACTION as "start" | "prepare" | "stop";

/** The [deployment tier of the environment](https://docs.gitlab.com/ee/ci/environments/index.html#deployment-tier-of-environments) for this job. */
export const CI_ENVIRONMENT_TIER = ENV.CI_ENVIRONMENT_TIER;

/** The description of the release. Available only on pipelines for tags. Description length is limited to first 1024 characters. */
export const CI_RELEASE_DESCRIPTION = ENV.CI_RELEASE_DESCRIPTION;

/** `true` if [FIPS mode](https://docs.gitlab.com/ee/development/fips_compliance.html) is enabled in the GitLab instance. */
export const CI_GITLAB_FIPS_MODE = ENV.CI_GITLAB_FIPS_MODE === "true";

/** `true` if the pipeline’s project has an open [requirement](https://docs.gitlab.com/ee/user/project/requirements/index.html). */
export const CI_HAS_OPEN_REQUIREMENTS = ENV.CI_HAS_OPEN_REQUIREMENTS === "true";

/** The internal ID of the job, unique across all jobs in the GitLab instance. */
export const CI_JOB_ID = ENV.CI_JOB_ID;

/** The name of the Docker image running the job. */
export const CI_JOB_IMAGE = ENV.CI_JOB_IMAGE;

/** `true` if the job was started manually. */
export const CI_JOB_MANUAL = ENV.CI_JOB_MANUAL === "true";

/** The name of the job. */
export const CI_JOB_NAME = ENV.CI_JOB_NAME;

/** `CI_JOB_NAME_SLUG` in lowercase, shortened to 63 bytes, and with everything except `0-9` and `a-z` replaced with `-`. No leading / trailing `-`. Use in paths. */
export const CI_JOB_NAME_SLUG = ENV.CI_JOB_NAME_SLUG;

/** The name of the job’s stage. */
export const CI_JOB_STAGE = ENV.CI_JOB_STAGE;

/** The status of the job as each runner stage is executed. Use with [`after_script`](https://docs.gitlab.com/ee/ci/yaml/index.html#after_script). */
export const CI_JOB_STATUS = ENV.CI_JOB_STATUS as "success" | "failed" | "canceled";

/** The job timeout, in seconds. */
export const CI_JOB_TIMEOUT = ENV.CI_JOB_TIMEOUT;

/** A token to authenticate with [certain API endpoints](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html). The token is valid as long as the job is running. */
export const CI_JOB_TOKEN = ENV.CI_JOB_TOKEN;

/** The job details URL. */
export const CI_JOB_URL = ENV.CI_JOB_URL;

/** The datetime when a job started. */
export const CI_JOB_STARTED_AT = new Date(ENV.CI_JOB_STARTED_AT);

/** `true` if the pipeline has a Kubernetes cluster available for deployments. */
export const CI_KUBERNETES_ACTIVE = ENV.CI_KUBERNETES_ACTIVE === "true";

/** The index of the job in the job set. Only available if the job uses [`parallel`](https://docs.gitlab.com/ee/ci/yaml/index.html#parallel). */
export const CI_NODE_INDEX = ENV.CI_NODE_INDEX;

/** The total number of instances of this job running in parallel. Set to `1` if the job does not use [`parallel`](https://docs.gitlab.com/ee/ci/yaml/index.html#parallel). */
export const CI_NODE_TOTAL = ENV.CI_NODE_TOTAL;

/** A comma-separated list of up to four merge requests that use the current branch and project as the merge request source. Only available in branch and merge request pipelines if the branch has an associated merge request. For example, `gitlab-org/gitlab!333,gitlab-org/gitlab-foss!11`. */
export const CI_OPEN_MERGE_REQUESTS = ENV.CI_OPEN_MERGE_REQUESTS;

/** The configured domain that hosts GitLab Pages. */
export const CI_PAGES_DOMAIN = ENV.CI_PAGES_DOMAIN;

/** The URL for a GitLab Pages site. Always a subdomain of `CI_PAGES_DOMAIN`. */
export const CI_PAGES_URL = ENV.CI_PAGES_URL;

/** The instance-level ID of the current pipeline. This ID is unique across all projects on the GitLab instance. */
export const CI_PIPELINE_ID = ENV.CI_PIPELINE_ID;

/** The project-level IID (internal ID) of the current pipeline. This ID is unique only within the current project. */
export const CI_PIPELINE_IID = ENV.CI_PIPELINE_IID;

/** How the pipeline was triggered. For a description of each value, see [Common `if` clauses for `rules`](https://docs.gitlab.com/ee/ci/jobs/job_control.html#common-if-clauses-for-rules), which uses this variable to control when jobs run. */
export const CI_PIPELINE_SOURCE = ENV.CI_PIPELINE_SOURCE as "push" | "web" | "schedule" | "api" | "external" | "chat" | "webide" | "merge_request_event" | "external_pull_request_event" | "parent_pipeline" | "trigger" | "pipeline";

/** `true` if the job was [triggered](https://docs.gitlab.com/ee/ci/triggers/index.html). */
export const CI_PIPELINE_TRIGGERED = ENV.CI_PIPELINE_TRIGGERED === "true";

/** The URL for the pipeline details. */
export const CI_PIPELINE_URL = ENV.CI_PIPELINE_URL;

/** The datetime when the pipeline was created. */
export const CI_PIPELINE_CREATED_AT = new Date(ENV.CI_PIPELINE_CREATED_AT);

/** The pipeline name defined in [`workflow:name`](https://docs.gitlab.com/ee/ci/yaml/index.html#workflowname) */
export const CI_PIPELINE_NAME = ENV.CI_PIPELINE_NAME;

/** The full path the repository is cloned to, and where the job runs from. If the GitLab Runner `builds_dir` parameter is set, this variable is set relative to the value of `builds_dir`. For more information, see the [Advanced GitLab Runner configuration](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section). */
export const CI_PROJECT_DIR = ENV.CI_PROJECT_DIR;

/** The ID of the current project. This ID is unique across all projects on the GitLab instance. */
export const CI_PROJECT_ID = ENV.CI_PROJECT_ID;

/** The name of the directory for the project. For example if the project URL is `gitlab.example.com/group-name/project-1`, `CI_PROJECT_NAME` is `project-1`. */
export const CI_PROJECT_NAME = ENV.CI_PROJECT_NAME;

/** The project namespace (username or group name) of the job. */
export const CI_PROJECT_NAMESPACE = ENV.CI_PROJECT_NAMESPACE;

/** The project namespace ID of the job. */
export const CI_PROJECT_NAMESPACE_ID = ENV.CI_PROJECT_NAMESPACE_ID;

/** `$CI_PROJECT_PATH` in lowercase with characters that are not `a-z` or `0-9` replaced with `-` and shortened to 63 bytes. Use in URLs and domain names. */
export const CI_PROJECT_PATH_SLUG = ENV.CI_PROJECT_PATH_SLUG;

/** The project namespace with the project name included. */
export const CI_PROJECT_PATH = ENV.CI_PROJECT_PATH;

/** A comma-separated, lowercase list of the languages used in the repository. For example `ruby,javascript,html,css`. The maximum number of languages is limited to 5. An issue [proposes to increase the limit](https://gitlab.com/gitlab-org/gitlab/-/issues/368925). */
export const CI_PROJECT_REPOSITORY_LANGUAGES = ENV.CI_PROJECT_REPOSITORY_LANGUAGES;

/** The root project namespace (username or group name) of the job. For example, if `CI_PROJECT_NAMESPACE` is `root-group/child-group/grandchild-group`, `CI_PROJECT_ROOT_NAMESPACE` is `root-group`. */
export const CI_PROJECT_ROOT_NAMESPACE = ENV.CI_PROJECT_ROOT_NAMESPACE;

/** The human-readable project name as displayed in the GitLab web interface. */
export const CI_PROJECT_TITLE = ENV.CI_PROJECT_TITLE;

/** The project description as displayed in the GitLab web interface. */
export const CI_PROJECT_DESCRIPTION = ENV.CI_PROJECT_DESCRIPTION;

/** The HTTP(S) address of the project. */
export const CI_PROJECT_URL = ENV.CI_PROJECT_URL;

/** The project visibility. */
export const CI_PROJECT_VISIBILITY = ENV.CI_PROJECT_VISIBILITY as "internal" | "private" | "public";

/** The project [external authorization classification label](https://docs.gitlab.com/ee/administration/settings/external_authorization.html). */
export const CI_PROJECT_CLASSIFICATION_LABEL = ENV.CI_PROJECT_CLASSIFICATION_LABEL;

/** The address of the project’s Container Registry. Only available if the Container Registry is enabled for the project. */
export const CI_REGISTRY_IMAGE = ENV.CI_REGISTRY_IMAGE;

/** The password to push containers to the project’s GitLab Container Registry. Only available if the Container Registry is enabled for the project. This password value is the same as the `CI_JOB_TOKEN` and is valid only as long as the job is running. Use the `CI_DEPLOY_PASSWORD` for long-lived access to the registry */
export const CI_REGISTRY_PASSWORD = ENV.CI_REGISTRY_PASSWORD;

/** The username to push containers to the project’s GitLab Container Registry. Only available if the Container Registry is enabled for the project. */
export const CI_REGISTRY_USER = ENV.CI_REGISTRY_USER;

/** The address of the GitLab Container Registry. Only available if the Container Registry is enabled for the project. This variable includes a `:port` value if one is specified in the registry configuration. */
export const CI_REGISTRY = ENV.CI_REGISTRY;

/** The full path to Git clone (HTTP) the repository with a [CI/CD job token](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html), in the format `https://gitlab-ci-token:$CI_JOB_TOKEN@gitlab.example.com/my-group/my-project.git`. */
export const CI_REPOSITORY_URL = ENV.CI_REPOSITORY_URL;

/** The description of the runner. */
export const CI_RUNNER_DESCRIPTION = ENV.CI_RUNNER_DESCRIPTION;

/** The OS/architecture of the GitLab Runner executable. Might not be the same as the environment of the executor. */
export const CI_RUNNER_EXECUTABLE_ARCH = ENV.CI_RUNNER_EXECUTABLE_ARCH;

/** The unique ID of the runner being used. */
export const CI_RUNNER_ID = ENV.CI_RUNNER_ID;

/** The revision of the runner running the job. */
export const CI_RUNNER_REVISION = ENV.CI_RUNNER_REVISION;

/** The runner’s unique ID, used to authenticate new job requests. In [GitLab 14.9](https://gitlab.com/gitlab-org/security/gitlab/-/merge_requests/2251) and later, the token contains a prefix, and the first 17 characters are used. Prior to 14.9, the first eight characters are used. */
export const CI_RUNNER_SHORT_TOKEN = ENV.CI_RUNNER_SHORT_TOKEN;

/** A comma-separated list of the runner tags. */
export const CI_RUNNER_TAGS = ENV.CI_RUNNER_TAGS;

/** The version of the GitLab Runner running the job. */
export const CI_RUNNER_VERSION = ENV.CI_RUNNER_VERSION;

/** The host of the GitLab instance URL, without protocol or port. For example `gitlab.example.com`. */
export const CI_SERVER_HOST = ENV.CI_SERVER_HOST;

/** The name of CI/CD server that coordinates jobs. */
export const CI_SERVER_NAME = ENV.CI_SERVER_NAME;

/** The port of the GitLab instance URL, without host or protocol. For example `8080`. */
export const CI_SERVER_PORT = ENV.CI_SERVER_PORT;

/** The protocol of the GitLab instance URL, without host or port. For example `https`. */
export const CI_SERVER_PROTOCOL = ENV.CI_SERVER_PROTOCOL;

/** The SSH host of the GitLab instance, used for access to Git repositories via SSH. For example `gitlab.com`. */
export const CI_SERVER_SHELL_SSH_HOST = ENV.CI_SERVER_SHELL_SSH_HOST;

/** The SSH port of the GitLab instance, used for access to Git repositories via SSH. For example `22`. */
export const CI_SERVER_SHELL_SSH_PORT = ENV.CI_SERVER_SHELL_SSH_PORT;

/** GitLab revision that schedules jobs. */
export const CI_SERVER_REVISION = ENV.CI_SERVER_REVISION;

/** File containing the TLS CA certificate to verify the GitLab server when `tls-ca-file` set in [runner settings](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section). */
export const CI_SERVER_TLS_CA_FILE = ENV.CI_SERVER_TLS_CA_FILE;

/** File containing the TLS certificate to verify the GitLab server when `tls-cert-file` set in [runner settings](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section). */
export const CI_SERVER_TLS_CERT_FILE = ENV.CI_SERVER_TLS_CERT_FILE;

/** File containing the TLS key to verify the GitLab server when `tls-key-file` set in [runner settings](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section). */
export const CI_SERVER_TLS_KEY_FILE = ENV.CI_SERVER_TLS_KEY_FILE;

/** The base URL of the GitLab instance, including protocol and port. For example `https://gitlab.example.com:8080`. */
export const CI_SERVER_URL = ENV.CI_SERVER_URL;

/** The major version of the GitLab instance. For example, if the GitLab version is `13.6.1`, the `CI_SERVER_VERSION_MAJOR` is `13`. */
export const CI_SERVER_VERSION_MAJOR = ENV.CI_SERVER_VERSION_MAJOR;

/** The minor version of the GitLab instance. For example, if the GitLab version is `13.6.1`, the `CI_SERVER_VERSION_MINOR` is `6`. */
export const CI_SERVER_VERSION_MINOR = ENV.CI_SERVER_VERSION_MINOR;

/** The patch version of the GitLab instance. For example, if the GitLab version is `13.6.1`, the `CI_SERVER_VERSION_PATCH` is `1`. */
export const CI_SERVER_VERSION_PATCH = ENV.CI_SERVER_VERSION_PATCH;

/** The full version of the GitLab instance. */
export const CI_SERVER_VERSION = ENV.CI_SERVER_VERSION;

/** `true` for all jobs executed in CI/CD. */
export const CI_SERVER = ENV.CI_SERVER === "yes";

/** `true` if the job is executed in a shared environment (something that is persisted across CI/CD invocations, like the `shell` or `ssh` executor). */
export const CI_SHARED_ENVIRONMENT = ENV.CI_SHARED_ENVIRONMENT === "true";

/** The host of the registry used by CI/CD templates. Defaults to `registry.gitlab.com`. */
export const CI_TEMPLATE_REGISTRY_HOST = ENV.CI_TEMPLATE_REGISTRY_HOST;

/** `true` for all jobs executed in CI/CD. */
export const GITLAB_CI = ENV.GITLAB_CI === "true";

/** The comma-separated list of licensed features available for the GitLab instance and license. */
export const GITLAB_FEATURES = ENV.GITLAB_FEATURES;

/** The email of the user who started the pipeline, unless the job is a manual job. In manual jobs, the value is the email of the user who started the job. */
export const GITLAB_USER_EMAIL = ENV.GITLAB_USER_EMAIL;

/** The ID of the user who started the pipeline, unless the job is a manual job. In manual jobs, the value is the ID of the user who started the job. */
export const GITLAB_USER_ID = ENV.GITLAB_USER_ID;

/** The username of the user who started the pipeline, unless the job is a manual job. In manual jobs, the value is the username of the user who started the job. */
export const GITLAB_USER_LOGIN = ENV.GITLAB_USER_LOGIN;

/** The name of the user who started the pipeline, unless the job is a manual job. In manual jobs, the value is the name of the user who started the job. */
export const GITLAB_USER_NAME = ENV.GITLAB_USER_NAME;

/** The path to the `kubeconfig` file with contexts for every shared agent connection. Only available when a [GitLab agent is authorized to access the project](https://docs.gitlab.com/ee/user/clusters/agent/ci_cd_workflow.html#authorize-the-agent). */
export const KUBECONFIG = ENV.KUBECONFIG;

/** The webhook payload. Only available when a pipeline is [triggered with a webhook](https://docs.gitlab.com/ee/ci/triggers/index.html#access-webhook-payload). */
export const TRIGGER_PAYLOAD = ENV.TRIGGER_PAYLOAD;

/** Approval status of the merge request. `true` when [merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/index.html) is available and the merge request has been approved. */
export const CI_MERGE_REQUEST_APPROVED = ENV.CI_MERGE_REQUEST_APPROVED === "true";

/** Comma-separated list of usernames of assignees for the merge request. */
export const CI_MERGE_REQUEST_ASSIGNEES = ENV.CI_MERGE_REQUEST_ASSIGNEES;

/** The instance-level ID of the merge request. This is a unique ID across all projects on GitLab. */
export const CI_MERGE_REQUEST_ID = ENV.CI_MERGE_REQUEST_ID;

/** The project-level IID (internal ID) of the merge request. This ID is unique for the current project. */
export const CI_MERGE_REQUEST_IID = ENV.CI_MERGE_REQUEST_IID;

/** Comma-separated label names of the merge request. */
export const CI_MERGE_REQUEST_LABELS = ENV.CI_MERGE_REQUEST_LABELS;

/** The milestone title of the merge request. */
export const CI_MERGE_REQUEST_MILESTONE = ENV.CI_MERGE_REQUEST_MILESTONE;

/** The ID of the project of the merge request. */
export const CI_MERGE_REQUEST_PROJECT_ID = ENV.CI_MERGE_REQUEST_PROJECT_ID;

/** The path of the project of the merge request. For example `namespace/awesome-project`. */
export const CI_MERGE_REQUEST_PROJECT_PATH = ENV.CI_MERGE_REQUEST_PROJECT_PATH;

/** The URL of the project of the merge request. For example, `http://192.168.10.15:3000/namespace/awesome-project`. */
export const CI_MERGE_REQUEST_PROJECT_URL = ENV.CI_MERGE_REQUEST_PROJECT_URL;

/** The ref path of the merge request. For example, `refs/merge-requests/1/head`. */
export const CI_MERGE_REQUEST_REF_PATH = ENV.CI_MERGE_REQUEST_REF_PATH;

/** `true` when the [squash on merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) option is set. */
export const CI_MERGE_REQUEST_SQUASH_ON_MERGE = ENV.CI_MERGE_REQUEST_SQUASH_ON_MERGE === "true";

/** The source branch name of the merge request. */
export const CI_MERGE_REQUEST_SOURCE_BRANCH_NAME = ENV.CI_MERGE_REQUEST_SOURCE_BRANCH_NAME;

/** `true` when the source branch of the merge request is [protected](https://docs.gitlab.com/ee/user/project/protected_branches.html). */
export const CI_MERGE_REQUEST_SOURCE_BRANCH_PROTECTED = ENV.CI_MERGE_REQUEST_SOURCE_BRANCH_PROTECTED === "true";

/** The HEAD SHA of the source branch of the merge request. The variable is empty in merge request pipelines. The SHA is present only in [merged results pipelines](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html). */
export const CI_MERGE_REQUEST_SOURCE_BRANCH_SHA = ENV.CI_MERGE_REQUEST_SOURCE_BRANCH_SHA;

/** The ID of the source project of the merge request. */
export const CI_MERGE_REQUEST_SOURCE_PROJECT_ID = ENV.CI_MERGE_REQUEST_SOURCE_PROJECT_ID;

/** The path of the source project of the merge request. */
export const CI_MERGE_REQUEST_SOURCE_PROJECT_PATH = ENV.CI_MERGE_REQUEST_SOURCE_PROJECT_PATH;

/** The URL of the source project of the merge request. */
export const CI_MERGE_REQUEST_SOURCE_PROJECT_URL = ENV.CI_MERGE_REQUEST_SOURCE_PROJECT_URL;

/** The target branch name of the merge request. */
export const CI_MERGE_REQUEST_TARGET_BRANCH_NAME = ENV.CI_MERGE_REQUEST_TARGET_BRANCH_NAME;

/** `true` when the target branch of the merge request is [protected](https://docs.gitlab.com/ee/user/project/protected_branches.html). */
export const CI_MERGE_REQUEST_TARGET_BRANCH_PROTECTED = ENV.CI_MERGE_REQUEST_TARGET_BRANCH_PROTECTED === "true";

/** The HEAD SHA of the target branch of the merge request. The variable is empty in merge request pipelines. The SHA is present only in [merged results pipelines](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html). */
export const CI_MERGE_REQUEST_TARGET_BRANCH_SHA = ENV.CI_MERGE_REQUEST_TARGET_BRANCH_SHA;

/** The title of the merge request. */
export const CI_MERGE_REQUEST_TITLE = ENV.CI_MERGE_REQUEST_TITLE;

/** The event type of the merge request. */
export const CI_MERGE_REQUEST_EVENT_TYPE = ENV.CI_MERGE_REQUEST_EVENT_TYPE as "detached" | "merged_result" | "merge_train";

/** The version of the merge request diff. */
export const CI_MERGE_REQUEST_DIFF_ID = ENV.CI_MERGE_REQUEST_DIFF_ID;

/** The base SHA of the merge request diff. */
export const CI_MERGE_REQUEST_DIFF_BASE_SHA = ENV.CI_MERGE_REQUEST_DIFF_BASE_SHA;
