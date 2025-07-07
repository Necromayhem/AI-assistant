<script setup lang="ts">
const openChat = useChat()
</script>

<template>
	<ChatHeader v-if="!openChat" />
	<ChatAssistantResponse v-if="openChat" />
	<ChatInput />
</template>

<style scoped></style>
