<script setup lang="ts">
import { useContext } from '~/store/useContext'

const isFixed = ref(false)
const input = ref('')
const response: any = ref(null)
const openChat = useChat()
const context = useContext()

const togglePosition = async (): Promise<void> => {
	if (input.value.trim()) {
		context.addUserMessage(input.value)
		input.value = ''
		isFixed.value = true
		await fetchData()
		if (response.value?.choices?.[0]?.message?.content) {
			context.addAssistantMessage(response.value.choices[0].message.content)
		}
		openChat.value = true
	}
}

// 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

const API_KEY =
	'Bearer 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'

const fetchData = async () => {
	try {
		const { data, error } = await useFetch(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				method: 'POST',
				headers: {
					Authorization: API_KEY,
					'Content-Type': 'application/json',
				},
				body: {
					model: 'openrouter/cypher-alpha:free',
					messages: context.getMessages,
				},
			}
		)

		if (error.value) {
			console.error('Error:', error.value)
			return
		}

		response.value = data.value
		return data.value
	} catch (err) {
		console.error('Fetch error:', err)
	}
}
</script>

<template>
	<div class="input-wrapper" :class="{ 'fixed-bottom': isFixed }">
		<input
			class="input"
			type="text"
			placeholder="Message AI assistant"
			v-model="input"
			@keyup.enter="togglePosition"
		/>
		<div class="control">
			<button @click="togglePosition">Отправить</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.input-wrapper {
	width: 100%;
	max-width: 768px;
	height: 112px;
	margin: 0 auto;
	padding: 10px;
	border-radius: 24px;
	background-color: #404045;
	&.fixed-bottom {
		position: fixed;
		bottom: 0;
		margin: 0 auto;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1000;
	}
}

.input {
	display: flex;
	width: 100%;
	max-width: 748px;
	height: 56px;
	margin: 0 auto;
}

.control {
	display: flex;
	justify-content: flex-end;
	height: 32px;
}
</style>
