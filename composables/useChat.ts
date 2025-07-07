// логика состояния чата(активируется на кнопку отправить)

export const useChat = () => useState<boolean>('usechat', () => false)
