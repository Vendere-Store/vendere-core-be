{{/* Define a template to generate a unique name for resources */}}
{{- define "vendere-core-be.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
