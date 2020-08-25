from . import about

@about.route('/<name>')
def about(name):
    return f'about {name}'
