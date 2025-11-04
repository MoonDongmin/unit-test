export function verifyPassword2(password: string, rules: Function[], dayOfWeek: number) {
  const WEEKEND_DAYS = [0, 6]; // 일요일(0)과 토요일(6)

  if (WEEKEND_DAYS.includes(dayOfWeek)) {
    throw new Error("It's the weekend!");
  }

  // 비밀번호 검증 로직 (예시)
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }

  // 규칙 검증 로직 (예시)
  for (const rule of rules) {
    if (!rule(password)) {
      throw new Error("Password does not meet the required rules.");
    }
  }

  // 비밀번호 검증이 성공하면 true를 반환
  return true;
}

