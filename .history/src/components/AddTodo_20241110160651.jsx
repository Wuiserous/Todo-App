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

      <label>
        <input
          type="checkbox"
        />
        Important
      </label>

      <button type="submit">Add Task</button>
    </form>
    )
}