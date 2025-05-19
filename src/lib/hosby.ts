
import HosbyClient from 'hosby-ts';

// Initialize Hosby client with the provided configuration
const hosby = new HosbyClient({
  baseURL: "https://dev-api.hosby.io",
  privateKey: "sk_MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDYQjx0vtEl9PF/w8dkpR3CZ4QWrwBoM5aRAiCMb+9Eg08pn78XfO2AIMtJ01WMg4Yooe6Rxb7adogqGkihT/px+I6onAaFVLdQYvLo+CG8R+31xUdg4wSVpa7NdsmiInFA1gyNH8EpUyePftTASbDj5/+4mcNABZ/NdHWFvl2zRPu9VHhW70+vJGokfm7YnpkwF6BCQsQHz1XfTolBfm8UJ8C0g6+0ydVYOy1O+d3KlfEimmFMqN1fh1jGOgcURjbWnz/hxhWBq8QCiA5m759sy/AwfJTAa49dx5Qn7EnOlftTrsNQN9JJKfb9qABb30SRC3T3I58jobBdg+fEvkVVAgMBAAECggEAF7nypJNf4nR0f4JFENF9yZuuVgfGuWf5i7jKReYs/90RNR2h60uJSh6u9w9Q6jzu3evgPw2NQi4xg78E+2/JKDJvQmf13jB8eT0V7gH1P5E7thR6H5LgqKN4IXI4LontV4H0eBJFEMnfBAMUB/G9zs9gEsqJ7a8ASJwPncgUQyvpcbxp15oqEulsCWmmK0a1VOXhe2U+UIZpytvBfUqw+WI4CjgUnjNTutPPKjF3qpzA4wTJeBa2s90moJliH/sc5TtOtYCXZayS4FMag1rxPCqLTVm0yDj4MeigfPEG5YKXk3ie4JU1YRz3FhDVLz0CtiR6/tjnB/UL5xTMKpqAgQKBgQDz+/W6FIyWbBtt2IcdkPaxpybjCq053qx1195rhrG3GHJjzYZag8Udyh7tpn/DUA041b24Xb7OSmiTjk0UTVtWCFGlOBEPAHYhtfmxv2xN7huhGkZGgj810OvTgIvgkSapT3z6wKxTNOfm8hEGFATC3MuuFknoeprygRNr6f0ygQKBgQDi6Lnpqy0bZqOWfBiD3drQYTnI10AHnmp0PyyHHXpd2YEQTZGTKuoR8E3c4BggeZx4nPtneKQWTquFc71SAQ8S41sFHbYY26BWMNJMuR7gfBIfXRlUDsaSCjnCUyM2x3re6DrHXqGUu4n77ZQjZD/fU+F1I2E1PtyuR6cr2PNA1QKBgHz0IVj3hTjUjQeoySofP/ij/opwwV7N581CjSrMhN+cqZjrfU+GBMHI7iYQC4bfzKW68bsmZ74G5aAMVPV82LYq9IWFPVdNiTKinAqoWrNeqs/LQQqDUhQht2VOhFSygfZcO0nAu4Cxq8LfXlCamAWkRrwVtixV/l0MNgIiiAYBAoGAcpBwNYNgreH/nF4hforIDMfaBgZv5KjeNL0kvT9r5fCIUnPnmTdkoRQELA3VAKiGEPupj0+BAWZNAX8zSjEQrEewT//1Tc2twXa651PcPBlIiR9XR3KCXX/eM7gIIoNLDTqRWtHzoQWjIFiOn+Pgv+A5CAyJ6vlHMJMq21+ZSdUCgYAecFJnNzpUsq0ZGuAMs8uqf0DIbxGe+Ba/mL1MiObaGi7FNNkLY17ZLIWsxdPO0fxRQEwKMVOzPPgcoipQyNhDi6FlDjzFQt5AmxvU1LJGvOq9s678e10wdhLfinGxx6Wt8b9Upm3v2N3iZIutZzg8U0o1xyUu5Q0c5wQ82XN/2g==",
  apiKeyId: "6829a989ccb669a2b4a46c84",
  projectId: "6829a989ccb669a2b4a46c82",
  userId: "6829a963ccb669a2b4a46c51",
  projectName: "Kanban"
});

// Initialize the client
(async () => {
  try {
    await hosby.init();
    console.log("Hosby client initialized successfully");
  } catch (error) {
    console.error("Error initializing Hosby client:", error);
  }
})();

export { hosby };
