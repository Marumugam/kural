#from kivy.uix.textinput import TextInput
#textinput = TextInput(text='Hello world')

from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput
from kivy.core.window import Window


class TestApp(App):

    def build(self):
        layout = BoxLayout(padding=10, orientation='vertical')
        self.query_input = TextInput(text='cool',multiline=False,size_hint=(1,0.17))
        self.query_input.bind(on_text_validate=self.on_enter)
        layout.add_widget(self.query_input)
        self.results = Label(text="Search Results will appear here")
        layout.add_widget(self.results)
        return layout

    def on_enter(self,value):
        print self.query_input.text
        self.results.text = self.query_input.text

if __name__ == "__main__":
    Window.fullscreen = True
    TestApp().run()