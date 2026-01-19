import Button from '../../button/button'
import './title-bar.scss'

export default function TitleBar() {
  return (
    <div className="title-bar">
      <div className="title-bar__icon-title">
        <div className="title-bar__icon">F</div>
        <div className="title-bar__title">Figma</div>
      </div>
      <Button x={true}>X</Button>
    </div>
  )
}
