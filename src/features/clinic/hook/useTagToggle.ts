'use client'
import { useState } from 'react'

export const useTagToggle = (tags: string[]) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(tags)

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevSelectedTags, tag],
    )
  }

  return { selectedTags, handleTagToggle }
}
