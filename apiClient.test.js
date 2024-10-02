/* eslint-disable */

const {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./apiClient");

describe("ApiClient", () => {
  let fetchSpy;

  /**
   * Mock the fetch method before each test.
   */
  beforeEach(() => {
    fetchSpy = jest
      .spyOn(global, "fetch")
      .mockImplementation(() => Promise.resolve());
  });

  /**
   * Restore the fetch method after each test.
   */
  afterEach(() => {
    fetchSpy.mockRestore();
  });

  describe("fetchUsers()", () => {
    it("should fetch a list of users", async () => {
      // Mock the users fixture
      const mockUsers = [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
      ];

      fetchSpy.mockResolvedValue({
        json: async () => mockUsers,
      });

      const users = await fetchUsers();
      expect(Array.isArray(users)).toBe(true);
      expect(users.length).toBeGreaterThan(0);
    });
  });

  describe("fetchUserById()", () => {
    it("should fetch a single user by ID", async () => {
      const mockUser = { id: 1, name: "User 1", email: "user1@example.com" };

      fetchSpy.mockResolvedValue({
        json: async () => mockUser,
      });

      const user = await fetchUserById(1);
      expect(user).toHaveProperty("id", 1);
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("email");
    });
  });

  describe("createUser()", () => {
    it("should create a new user", async () => {
      const newUser = {
        name: "John Doe",
        username: "johndoe",
        email: "john.doe@example.com",
      };

      const createdUser = { id: 3, ...newUser };

      fetchSpy.mockResolvedValue({
        json: async () => createdUser,
      });

      const response = await createUser(newUser);
      expect(response).toHaveProperty("id");
      expect(response).toMatchObject(newUser);
    });
  });

  describe("updateUser()", () => {
    it("should update a user by ID", async () => {
      const updatedData = {
        name: "Jane Doe",
        username: "janedoe",
        email: "jane.doe@example.com",
      };

      const updatedUser = { id: 1, ...updatedData };

      fetchSpy.mockResolvedValue({
        json: async () => updatedUser,
      });

      const response = await updateUser(1, updatedData);
      expect(response).toHaveProperty("id", 1);
      expect(response).toMatchObject(updatedData);
    });
  });

  describe("deleteUser()", () => {
    it("should delete a user by ID", async () => {
      fetchSpy.mockResolvedValue({
        status: 200,
      });

      const response = await deleteUser(1);
      expect(response.status).toBe(200);
    });
  });
});
