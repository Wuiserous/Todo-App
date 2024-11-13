export default function ProgressSpace(props) {
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-3 col-end-4 border ${props.bgColor} border-gray-500`}>
        <div class="flex justify-center items-center">
  <svg class="w-32 h-32 transform rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path
      class="text-gray-200"
      stroke="currentColor"
      stroke-width="4"
      fill="none"
      d="M18 2.0845a15.9155 15.9155 0 0 1 13.208 7.8186A15.9155 15.9155 0 0 1 18 31.9155A15.9155 15.9155 0 0 1 4.791 9.9031A15.9155 15.9155 0 0 1 18 2.0845z"
    ></path>
    <path
      class="text-blue-500"
      stroke="currentColor"
      stroke-width="4"
      fill="none"
      stroke-dasharray="100, 100"
      stroke-dashoffset="25" <!-- Adjust this value to change the progress -->
      d="M18 2.0845a15.9155 15.9155 0 0 1 13.208 7.8186A15.9155 15.9155 0 0 1 18 31.9155A15.9155 15.9155 0 0 1 4.791 9.9031A15.9155 15.9155 0 0 1 18 2.0845z"
    ></path>
  <svg>
</div>

      </div> 
    )
}