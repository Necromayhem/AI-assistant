<script setup lang="ts">
import { useContext } from '~/store/useContext'

const context = useContext()
</script>

<template>
	<div class="response-wrapper">
		<div class="message-wrapper">
			<div
				v-for="(message, index) in context.getMessages"
				:key="index"
				:class="['message', message.role]"
			>
				<p v-if="message.role === 'assistant'">Ответ от AI:</p>
				<p v-else>Ваше сообщение:</p>
				<p>{{ message.content }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.response-wrapper {
	flex-grow: 1;
	min-height: 0;
	width: 100%;
	max-width: 800px;
	margin: auto;
	padding-top: 40px;
	padding-left: 48px;
	overflow-y: auto;
	color: #f8faff;
	padding-bottom: 100px;
	-webkit-overflow-scrolling: touch;
	scroll-behavior: smooth;
}

.message-wrapper {
	width: 100%;
	max-width: 752px;
}

.message {
	margin-bottom: 20px;
	padding: 15px;
	border-radius: 8px;
	width: fit-content;
	max-width: 80%;
	white-space: pre-wrap;
	word-break: break-word;

	&.user {
		background-color: #404045;
		align-self: flex-end;
		margin-left: auto;
	}

	&.assistant {
		background-color: #2d2d32;
		align-self: flex-start;
		margin-right: auto;
		max-width: 100%;
	}
}
</style>
