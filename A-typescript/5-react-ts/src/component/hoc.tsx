import * as hoistNonReactStatics from 'hoist-non-react-statics'
import * as React from 'react'

type InjectedProps = Partial<typeof hocProps>

const hocProps = {
    inputSetting: {
        maxlength: 30,
        placeholder: '请输入待办事项',
    }
}

export const withTodoInput = <P extends InjectedProps>(
  UnwrappedComponent: React.ComponentType<P>,
) => {
  type Props = Omit<P, keyof InjectedProps>

  class WithToggleable extends React.Component<Props> {

    public static readonly UnwrappedComponent = UnwrappedComponent

    public render() {

      return (
        <UnwrappedComponent
        inputSetting={hocProps}
        {...this.props as P}
        />
      );
    }
  }

  return hoistNonReactStatics(WithToggleable, UnwrappedComponent)
}
