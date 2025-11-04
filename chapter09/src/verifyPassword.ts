export function verifyPassword(password: string, options: string[], dayOfWeek: number) {
  // dayOfWeek가 0 (일요일)이나 6 (토요일)일 경우 에러를 던짐
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new Error("It's the weekend!");
  }

  // 비밀번호 검증 로직 (예시)
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }

  // 추가적인 옵션 처리 로직 (예시)
  if (options.includes("uppercase") && !/[A-Z]/.test(password)) {
    throw new Error("Password must contain at least one uppercase letter.");
  }

  // 비밀번호 검증이 성공하면 true를 반환
  return true;
}
