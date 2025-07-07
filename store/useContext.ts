import { defineStore } from 'pinia'

export const useContext = defineStore('context', () => {
	const messages = ref<
		Array<{
			role: 'user' | 'assistant'
			content: string
		}>
	>([])

	const getMessages = computed(() => messages.value)

	function addUserMessage(content: string) {
		messages.value.push({
			role: 'user',
			content,
		})
	}

	function addAssistantMessage(content: string) {
		messages.value.push({
			role: 'assistant',
			content,
		})
	}

	return { messages, getMessages, addUserMessage, addAssistantMessage }
})
