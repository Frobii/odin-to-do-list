import task from './task';

export default function handleSubmit(event, project) {
  event.preventDefault();

  console.log('hey!');
  project.setTitle('helloooo');
  console.log(project.getTitle());
}
