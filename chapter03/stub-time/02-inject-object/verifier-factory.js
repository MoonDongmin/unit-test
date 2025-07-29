import {PasswordVerifier} from './password-verifier-time02';
import {RealTimeProvider} from './time-provider';

export const passwordVerifierFactory = (rules) => {
  return new PasswordVerifier(new RealTimeProvider());
}
