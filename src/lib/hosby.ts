
import Hosby from 'hosby-ts';

// Initialize Hosby client
// Note: Using publishable config information here. For a private key in production,
// you would need to handle this through environment variables and backend authentication.
const hosby = new Hosby({
  baseURL: "https://api.hosby.io",
  apiKeyId: "6829a989ccb669a2b4a46c84",
  projectId: "6829a989ccb669a2b4a46c82",
  userId: "6829a963ccb669a2b4a46c51",
  projectName: "Kanban",
  // The private key would normally be stored securely and not in client code
});

export { hosby };
