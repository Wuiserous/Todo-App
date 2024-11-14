export default function AddTodo(props) {
    return (
        <form>
      <input
        type="text"
        placeholder="Task title"
      />

      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
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