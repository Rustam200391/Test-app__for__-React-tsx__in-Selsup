import React, { Component } from 'react';

// интерфейсы
interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  id: number;
  name: string;
  code: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  editedParams: ParamValue[] | null;
  editedColors: Color[] | null;
}

// стили внутри файла
const EditorStyles = `
.editor {
  font-family: Arial, sans-serif;
}

.form {
  margin-bottom: 20px;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
`;

// Компонент редактора параметров
class ParamEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editedParams: null,
      editedColors: null,
    };
  }

  componentDidMount() {
    this.setState({
      editedParams: this.props.model.paramValues,
      editedColors: this.props.model.colors,
    });
  }

  updateParamValue = (updatedParamValue: ParamValue) => {
    if (this.state.editedParams) {
      const updatedParamValues = this.state.editedParams.map((param) =>
        param.paramId === updatedParamValue.paramId ? updatedParamValue : param
      );
      this.setState({ editedParams: updatedParamValues });
    }
  };

  updateColor = (updatedColor: Color) => {
    if (this.state.editedColors) {
      const updatedColors = this.state.editedColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      );
      this.setState({ editedColors: updatedColors });
    }
  };

  getModel = (): Model | null => {
    if (this.state.editedParams && this.state.editedColors) {
      return {
        paramValues: this.state.editedParams,
        colors: this.state.editedColors,
      };
    }
    return null;
  };

  render() {
    if (!this.state.editedParams || !this.state.editedColors) {
      return null;
    }

    return (
      <div className="editor">
        <style>{EditorStyles}</style>
        <form>
          <div className="form">
            <h3>Параметры товара</h3>
            {this.props.params.map((param) => {
              const paramValue = this.state.editedParams!.find(p => p.paramId === param.id);
              return (
                <div key={param.id}>
                  <label>{param.name}</label>
                  <input
                    type="text"
                    placeholder="Значение параметра"
                    value={paramValue?.value || ''}
                    onChange={(e) => this.updateParamValue({ paramId: param.id, value: e.target.value })}
                    onBlur={(e) => this.updateParamValue({ paramId: param.id, value: e.target.value })}
                  />
                </div>
              );
            })}
          </div>
          <div className="form">
            <h3>Цвета товара</h3>
            {this.state.editedColors.map((color) => (
              <div key={color.id}>
                <label>{color.name}</label>
                <input
                  type="text"
                  placeholder="Код цвета"
                  value={color.code}
                  onChange={(e) => this.updateColor({ ...color, code: e.target.value })}
                  onBlur={(e) => this.updateColor({ ...color, code: e.target.value })}
                />
              </div>
            ))}
          </div>
          <button type="button" onClick={() => console.log(this.getModel())}>Получить модель</button>
        </form>
      </div>
    );
  }
}

export default ParamEditor;
