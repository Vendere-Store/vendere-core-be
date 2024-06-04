# templates/_helpers.tpl
{{/*
Expand the name of the chart.
*/}}
{{- define "vendere-core.fullname" -}}
{{- include "vendere-core.name" . }}-{{ .Release.Name }}
{{- end -}}

{{/*
Create the default labels.
*/}}
{{- define "vendere-core.labels" -}}
app.kubernetes.io/name: {{ include "vendere-core.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{/*
Selector Labels
*/}}
{{- define "vendere-core.selectorLabels" -}}
app.kubernetes.io/name: {{ include "vendere-core.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{/*
Chart Name
*/}}
{{- define "vendere-core.name" -}}
vendere-core
{{- end -}}
