export interface Repositories {
  id: number
  name: string
  html_url: string
  homepage: string
  description: string
  topics?: string[]
}

export type Tab = "herramientas" | "tecnologias"

export interface Favorite {
  title: string
  description: string
  image: string
  key: string
}
