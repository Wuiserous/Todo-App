export default function AddTodo(props) {
    return (
        <form>
      <input
        type="text"
        placeholder="Task title"
      />

      <label>
        <input
          type="checkbox"
        />
        Urgent
      </label>

      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)}
        />
        Important
      </label>

      <button type="submit" style={styles.button}>Add Task</button>
    </form>
    )
}