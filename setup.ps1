# Install deno into current workspace.

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'


# Froce set DENO_DIR and PATH environment variable without any check to
# ensure system-level deno is shadowed by workspace-level deno, becaues
# deno from system may be outdated and we shouldn't touch or update it.
# These environment variables are scoped in current powershell process.
[Environment]::SetEnvironmentVariable('DENO_DIR', "$PWD\.deno")
[Environment]::SetEnvironmentVariable('PATH', "$Env:DENO_DIR\bin;$Env:PATH")


if (Test-Path "$Env:DENO_DIR\bin\deno.exe") {
    Write-Host "Found deno in current workspace"
    deno.exe upgrade
}
else {
    Write-Host "Installing deno"
    New-Item -Type Directory "$Env:DENO_DIR\bin" -Force | Out-Null
    Invoke-WebRequest "https://github.com/denoland/deno/releases/latest/download/deno-x86_64-pc-windows-msvc.zip" -OutFile "$Env:TEMP\deno.zip"
    Expand-Archive "$Env:TEMP\deno.zip" "$Env:DENO_DIR\bin" -Force
    Remove-Item "$Env:TEMP\deno.zip" -Force
    Write-Host "Deno was installed successfully"
}

deno.exe -V
