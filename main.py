lista_users = []
lista_membros = []
lista_patrocinadores = []

class User:
    def __init__(self, nome, sobrenome, email, tipo):
        self.nome = nome
        self.sobrenome = sobrenome
        self.email = email
        self.tipo = tipo
    def novo_user (self,):
        return ('Novo user Cadastrado')
        lista_users.append(self)

class Membro_equipe(User):
    def __init__(self):
        pass
    def membro (self):
        return (f'Membro {self.nome} entrou')
        lista_membros.append(self)

class Patrocinador(Membro_equipe):
    def __init__(self, nome_fantasia):
        self.nome_fantasia = nome_fantasia
    def patrocinador (self):
        return (f'A marca {self.nome_fantasia} está patrocinando a página')
        lista_patrocinadores.append(self)

    
    
class Contato:
    def __init__(self, nome_contato, email, telefone):
        self.nome_contato = nome_contato
        if nome_contato not in lista_membros:
            raise ('Não é de um membro')
        self.email = email
        self.telefone = telefone